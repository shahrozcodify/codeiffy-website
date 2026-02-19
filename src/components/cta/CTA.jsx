import React from 'react'
import './CTA.css'

function CTA(props) {
    return (
        <div>
            <div className="cta-container">
                <h2 className="cta-title">
                    {props.title || "Ready to Transform Your Technology Landscape?"}
                </h2>
                <p className="cta-text">
                    {props.text || "Partner with Codeifyy to build scalable systems that power long-term growth."}
                </p>
                <a href={props.link || "#"} className="cta-button">
                    {props.btnText || "Discuss Your Project"}
                </a>
            </div>
        </div>
    )
}

export default CTA