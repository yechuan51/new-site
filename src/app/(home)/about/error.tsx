"use client";

import {NextPage} from "next";
import {ErrorPagePropsType} from "@/lib/types/next_types";

const ErrorPage: NextPage<ErrorPagePropsType> = ({error}) => {
    return (
      <div>
        <h2>{error.message}</h2>
      </div>
    );
}

export default ErrorPage;