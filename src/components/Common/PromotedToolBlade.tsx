import { Typography, Box } from "@mui/material";
import logoBlack from "../../assets/system-integration.png";
import { PreLoader } from "./PreLoader";
import { useState } from "react";

export const PromotedToolBlade = () => {
    const [active] = useState(true);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                // gap: 15,
                alignItems: "center",
                height: 1,
            }}
        >
            <Box>
                <img src={logoBlack} alt="Healthcare Logo" style={{ width: "200px" }} />
            </Box>
            <Box sx={{ lineHeight: 0.5, textAlign: "center" }}>
                {/* <PreLoader setActive={active} /> */}
                <Typography
                    variant="h4"
                    color="primary.dark"
                    fontWeight="500"
                    sx={{ mt: 3 }}
                >
                    Health Tools
                </Typography>
                <Typography variant="h6" sx={{ color: "grey.500", mt: 1 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.
                </Typography>
            </Box>
        </Box>
    );
};
