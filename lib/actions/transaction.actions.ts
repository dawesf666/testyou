"use server";

import { redirect } from 'next/navigation'
import Stripe from "stripe";
import { handleError } from '../utils';
import prisma from "../prisma";

// import { connectToDatabase } from '../database/mongoose';
// import Transaction from '../database/models/transaction.model';
import { updateCredits } from './user.actions';
import { plans } from '@/constants';

export async function checkoutCredits(transaction: CheckoutTransactionParams) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const amount = Number(transaction.amount) * 100;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: amount,
          product_data: {
            name: transaction.plan,
          }
        },
        quantity: 1
      }
    ],
    metadata: {
      plan: transaction.plan,
      credits: transaction.credits,
      buyerId: transaction.buyerId,
    },
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
  })

  redirect(session.url!)
}

export async function createTransaction(transaction: CreateTransactionParams) {
  try {
    //await connectToDatabase();

    // Create a new transaction with a buyerId

    const newTransaction = await prisma.transactions.create({
        data:{
            createdAt:transaction.createdAt,
            stripeId:transaction.stripeId,
            amount:transaction.amount,
            plan:transaction.plan,
            credits:transaction.credits,
            buyer:transaction.buyerId
        }
      //...transaction, buyer: transaction.buyerId
    })

    await updateCredits(transaction.buyerId, transaction.credits);

    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    handleError(error)
  }
}