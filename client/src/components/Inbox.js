import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'


const Inbox = () => {
  const [expanded, setExpanded] = React.useState(false);
  const params = useParams()
  const navigate = useNavigate()
  const requests = useSelector(state => state.requests)
  
  useEffect(()=>{
    setExpanded(params.requestId ? params.requestId: requests[0]._id)
  },[params, requests])
//   console.log(expanded)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    navigate(`/inbox/${panel}`)
  };

  return (
    <div>
        {
            requests.length && requests.map(request => {
                return (<Accordion key={request._id} expanded={expanded === request._id} onChange={handleChange(request._id)}>
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