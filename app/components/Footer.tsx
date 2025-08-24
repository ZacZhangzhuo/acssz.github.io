import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import Grid from "@mui/material/Grid";

export default function Footer() {
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: { xs: 0, sm: 0 },
				py: { xs: 8, sm: 10 },
				textAlign: { sm: "center", md: "center" },
				alignSelf: "center",
			}}
		>
			<Typography component="h2" variant="h4">
				Contact Us
			</Typography>
			<Grid spacing={2} sx={{ alignSelf: "center" }}>
				<img src="public/media/QRcode.jpg" style={{ width: "50%" }}></img>

				<Stack
					direction="row"
					spacing={1}
					useFlexGap
					sx={{ justifyContent: "center", color: "text.secondary" }}
				>
					<IconButton
						color="inherit"
						size="small"
						href="xuelian@acssz.org"
						aria-label="Email"
						sx={{ alignSelf: "center" }}
					>
						<EmailIcon />
					</IconButton>
					<IconButton
						color="inherit"
						size="small"
						href="https://www.facebook.com/groups/174462206028150/"
						aria-label="FacebookIcon"
						sx={{ alignSelf: "center" }}
					>
						<FacebookIcon />
					</IconButton>
					<IconButton
						color="inherit"
						size="small"
						href="http://www.weibo.com/p/1005052462691882/home?from=page_100505&mod=TAB&is_hot=1"
						aria-label="WeiBo"
						sx={{ alignSelf: "center" }}
					>
						<img src="public/icons/weibo.png" alt="WeiBo" style={{ width: "60%", height: "60%" }} />
					</IconButton>
					<IconButton
						color="inherit"
						size="small"
						href="https://www.xiaohongshu.com/user/profile/5b2f291af7e8b90e5add573c?xhsshare=CopyLink&appuid=5b685daef6654c0001ea910a&apptime=1677051906"
						aria-label="XiaoHongShu"
						sx={{ alignSelf: "center" }}
					>
						<img src="public/icons/xiaohongshu.png" alt="WeiBo" style={{ width: "120%", height: "120%" }} />
					</IconButton>
				</Stack>
			</Grid>
		</Container>
	);
}
