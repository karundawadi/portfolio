import React from "react"
import TemplateCard from "./Template/template_card"

function SaveCash(props){
    return(
        <TemplateCard
            LanguagesUsed = {props.LanguagesUsed}
            projectTitle = {props.projectTitle}
            shortDescription ={props.shortDescription}
            actualDescription = {props.actualDescription}
            gitHubLink = {props.gitHubLink}
            modalDescription = {props.modalDescription}
        />
    )
}
export default SaveCash