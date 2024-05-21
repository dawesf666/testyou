import * as React from "react";

import { Progress } from "@/components/ui/progress";

const ProgressBar = (props: { value: number }) => {
    const [progress, setProgress] = React.useState(0);
    //console.log("VALLUE", props.value);
    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(props.value), 1500);
        return () => clearTimeout(timer);
    }, [props]);
    //console.log(progress);
    return <Progress value={progress} className="text-red-600" />;
};

export default ProgressBar;
