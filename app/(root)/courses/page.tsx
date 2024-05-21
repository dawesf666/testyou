//"use client";
import React from "react";
import { SignedIn, auth } from "@clerk/nextjs";

import { redirect } from "next/navigation";
import { getAllCourses } from "@/lib/actions/course.actions";
import CourseCard from "@/components/shared/CourseCard";
type Props = {};

const CoursesPage = async () => {
    const { userId } = auth();

    if (!userId) redirect("/sign-in");

    const courses = await getAllCourses();
    console.log("courses", courses);

    return (
        <div className="sm:grid-cols-2 md:grid md:grid-cols-4 md:gap-4">
            {courses.map((course: Course, index: number) => (
                <CourseCard key={index} course={course} />
            ))}
        </div>
    );
};

export default CoursesPage;
