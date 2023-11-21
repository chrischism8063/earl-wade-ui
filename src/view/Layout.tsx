import React, { PropsWithChildren } from "react"


type MyComponentProps = PropsWithChildren<{}>;

const Layout = ({ children }: MyComponentProps) => {
    return (<div
        style={{
            display: "flex",
            width: "100%"
        }}
    >
        {children}
    </div>)
}

export default Layout