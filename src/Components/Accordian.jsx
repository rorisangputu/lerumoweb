import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Accordian() {
    return (
        <div className="flex flex-col justify-evenly">
            <Accordion
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none',
                    },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        color: '#000',
                        fontWeight: 'semibold',
                        borderBottom: '1px solid #000000',
                        fontSize: '25px',
                    }}
                >
                    Custom Website Development
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#333', backgroundColor: 'transparent' }}>
                    We develop custom websites tailored to your specifications, ensuring high quality and responsive design that meets the needs of your business.
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none',
                    },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent' }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{
                        color: '#000',
                        fontWeight: 'semibold',
                        borderBottom: '1px solid #000000',
                        fontSize: '25px',
                    }}
                >
                    Dynamic Web Applications
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#333', backgroundColor: 'transparent' }}>
                    Our dynamic web applications allow clients to manage their content seamlessly. These solutions are scalable and user-friendly, tailored specifically to meet your business needs.
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none',
                    },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent' }} />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{
                        color: '#000',
                        fontWeight: 'semibold',
                        borderBottom: '1px solid #000000',
                        fontSize: '25px',
                    }}
                >
                    Social Media Setup
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#333', backgroundColor: 'transparent' }}>
                    We provide comprehensive social media setup services to help businesses establish their online presence, from account creation to optimization, ensuring your brand stands out across various platforms.
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
