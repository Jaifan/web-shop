import React from 'react'
import "./Footer.css"
import {  Typography } from '@material-ui/core';

const Footer = () => {

    return (
        <div className='rooter'>

            <div className="body">
                <Typography className="header">Institute</Typography>
                <Typography variant="subtitle2" className='descrip'>East Delta University</Typography>
            </div>

            <div className="body"> 
                <Typography className="header">Developers</Typography>
                <Typography variant="subtitle2"  className='descrip'>
                    Jafran Bin Zakaria(Leader)
                    <br/>
                    Tusrehul Din Alvi
                    <br/>
                    Fahmida Rahman
                    <br/>
                    Humaira Tunjum Jaya
                    <br/>
                    Farhana Akter
                    <br/>
                </Typography>
            </div>

            <div className="body">
                <Typography className="header">Project Resoure</Typography>
                <Typography variant='subtitle2'  className='descrip'>
                    CommerceJs(Database and Server)
                    <br/>
                    ReactJs
                    <br/>
                    Material-UI(Core , Icon)
                    <br/>
                    Stripe
                </Typography>
            </div>

            <div className="body">
                <Typography  className="header">Instructor</Typography>
                <Typography variant='subtitle2'  className='descrip'>
                    Saraf Anika
                    <br/>
                    Contact : saraf.a@eastdelta.edu.bd
                </Typography>
            </div>

            <div className="body">
                <Typography className="header">For Bug Issues</Typography>
                <Typography variant='subtitle2' className='descrip'>
                    Contact : Jafran Bin Zakaria
                    <br/>
                    181007612@eastdelta.edu.bd Or
                    <br/>
                    jafranbinzakaria@gmail.com
                </Typography>
            </div>

        </div>
    )
}

export default Footer
