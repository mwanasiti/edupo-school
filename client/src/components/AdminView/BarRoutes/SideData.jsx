import { BorderColor, Dashboard, Group, Person, School, Settings } from '@material-ui/icons'
import React from 'react'

export const SideData =[
    {
        title: "Dashboard",
        icon:  <Dashboard/>,
        link: "/dashboard"
    },
    {
        title: "Teacher",
        icon:  <BorderColor/>,
        link: "/addteacher"
    },
    {
        title: "Student",
        icon:  <School/>,
        link: "/addstudent"
    },
    {
        title: "Parent",
        icon:  <Person/>,
        link: "/addparent"
    },
    {
        title: "Staff",
        icon:  <Group/>,
        link: "/addstaff"
    },
    {
        title: "Settings",
        icon:  <Settings/>,
        link: "/dashboard"
    },

]

