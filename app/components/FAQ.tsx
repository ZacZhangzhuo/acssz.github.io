import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel),
      );
    };

  return (
		<Container
			id="faq"
			sx={{
				pt: { xs: 4, sm: 12 },
				pb: { xs: 0, sm: 0 },
				position: "relative",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: { xs: 3, sm: 6 },
			}}
		>
			<Typography
				component="h2"
				variant="h4"
				sx={{
					color: "text.primary",
					width: { sm: "100%", md: "60%" },
					textAlign: { sm: "left", md: "center" },
				}}
			>
				Frequently asked questions
			</Typography>
			<Box sx={{ width: "100%" }}>
				<Accordion expanded={expanded.includes("panel1")} onChange={handleChange("panel1")}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1d-content"
						id="panel1d-header"
					>
						<Typography component="span" variant="subtitle2">
							What preparations do we need to make before departure?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
							Visa application, Luggage preparation, Domestic bank / card-related matters, Domestic mobile
							phone and SIM card, Flight tickets...
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={expanded.includes("panel2")} onChange={handleChange("panel2")}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2d-content"
						id="panel2d-header"
					>
						<Typography component="span" variant="subtitle2">
							What are the steps for finding accommodation in Zurich?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
							Step 1: Search for suitable accommodation through various channels, apply to view the
							property and submit a rental application according to the process for each channel (see
							below for details). Step 2: Once the landlord/agent has accepted your application, sign a
							rental contract with the landlord/agent. If the landlord does not accept your application,
							return to step 1. Step 3: Complete the handover of the property and move in.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={expanded.includes("panel3")} onChange={handleChange("panel3")}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel3d-content"
						id="panel3d-header"
					>
						<Typography component="span" variant="subtitle2">
							How much does it cost to live in Zurich?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
							Generally, monthly expenses range from 1,500 to 2,000 Swiss francs, with no upper limit:
							Fixed expenses: rent, insurance, telephone bills, transportation costs, etc. If you live in
							a student dormitory (e.g., Woko, Juwo, WFSS), rent typically ranges from 500 to 800 Swiss
							Francs, which is relatively affordable. If you rent through a private landlord, prices will
							be higher. Shared accommodation costs between 600 and 1,200 Swiss Francs per person. Renting
							an apartment alone in Zurich generally costs over 1,200 Swiss Francs, with better options
							reaching over 3,000 Swiss Francs. For insurance, you can choose the Swisscare discount
							exclusive to the ACSSZ, starting at 56 Swiss francs per month (for those aged 31 and
							under). If you are new to the area and prefer a zero-deductible plan, you can opt for the
							Academic Care zero-deductible package, though its costs are relatively higher (140 Swiss
							francs per month for those aged 25 and under, and 250 Swiss francs per month for those aged
							26 and above) Phone bills typically range from 20 to 35 Swiss Francs. The ACSSZ
							offers an exclusive discount through Sunrise LEBARA, which is cheaper than market rates.
							Transportation costs usually involve purchasing an annual pass for Zone 110. For those under
							25, the annual cost is 570 Swiss Francs. Those who frequently travel in the evenings can
							purchase the Night GA pass for 99 Swiss Francs per year, allowing unlimited travel in
							GA-covered areas after 7 PM. Other expenses mainly involve grocery shopping. If you cook at
							home most of the time, approximately 400 CHF per month for supermarket shopping is
							sufficient. If your time is more valuable, eating at the cafeteria or takeout shops daily
							averages 30–40 CHF per day. Occasional restaurant visits cost around 30–50 CHF per person.
							Online purchases of skincare products and clothing can cost between 50 and 200 Swiss Francs,
							though many students choose to buy everything in one go when they return home annually.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={expanded.includes("panel4")} onChange={handleChange("panel4")}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel4d-content"
						id="panel4d-header"
					>
						<Typography component="span" variant="subtitle2">
							How to join ACSSZ?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
							If you would like to join us, please follow our announcements at the start of each autumn
							semester.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Box>
		</Container>
  );
}
