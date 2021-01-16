import React from 'react'
import { motion } from "framer-motion";


export const QuoteBox = (props) => {
    return(
        <div className="quotebox">
          {props.text}
        </div>
    )
}

