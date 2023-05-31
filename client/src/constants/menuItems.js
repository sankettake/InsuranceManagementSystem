import { Inbox, CalendarMonth, Queue, AccountTree } from '@mui/icons-material';
const menuItems = [
    {
        "name": "Attendance",
        "icon": <CalendarMonth />,
        "href": "/attendance"
    },
    {
        "name": "Leave Request",
        "icon": <Queue />,
        "href": "/leave"
    },
    {
        "name": "Inbox",
        "icon": <Inbox />,
        "href": "/inbox"
    },
    {
        "name": "Directory",
        "icon": <AccountTree />,
        "href": "/directory"
    }
]

export default menuItems