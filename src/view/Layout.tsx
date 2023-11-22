import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react"


type MyComponentProps = PropsWithChildren<{}>;

const Layout = ({ children }: MyComponentProps) => {
    return (<Box
        sx={{
            backgroundColor: "orange",
            // height: "100vh"
        }}
    >
        {children}
    </Box>)
}

export default Layout