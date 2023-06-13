import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RequestData = [
    {
        id: 1,
        type: "Leave",
        user: "Sanket",
        duration: "2 days",
        from: "9th June",
        to: "11th June",
        reason: "Out of Station"
    },
    {
        id: 2,
        type: "Leave",
        user: "Sanket",
        duration: "1 days",
        from: "19th June",
        to: "21th June",
        reason: "Not feeling well"
    },
    {
        id: 3,
        type: "Attendance Regularization",
        user: "Amit",
        duration: "2 days",
        from: "7th June",
        to: "8th June",
        reason: "Forgot to login"
    },
    {
        id: 4,
        type: "Attendance Regularization",
        user: "Sanket",
        duration: "2 days",
        from: "5th June",
        to: "6th June",
        reason: "Out for client visit"
    },
    {
        id: 5,
        type: "Leave",
        user: "Amit",
        duration: "4 days",
        from: "29th June",
        to: "30th June",
        reason: "Out of Station"
    },
]

const Inbox = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
        {
            RequestData.length && RequestData.map(request => {
                return (<Accordion expanded={expanded === request.id} onChange={handleChange(request.id)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                //   aria-controls="panel4bh-content"
                //   id="panel4bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>{request.type} Request</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{request.user} - {request.duration}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    From - {request.from} To - {request.to} Reason - {request.reason}
                  </Typography>
                </AccordionDetails>
              </Accordion>)
            })

        }
    </div>
  );
}

export default Inbox