import React from "react";

function Title({ title }: { title: string }) {
    return <h1 className="sr-only">Movies center {title}</h1>;
}

export default Title;
