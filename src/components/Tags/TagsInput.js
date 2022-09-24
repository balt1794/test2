import React from "react";
import { makeStyles } from "@material-ui/styles";
import { colors, Grow } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    wrapperito: {
       display: "flex",
       align: "center",
       fontFamily: "Courier New",
       fontWeight: "bold",
       border: "2px solid #000",
       padding: ".5em",
       innerWidth:"min(80vw, 600px)",
       marginTop:"1em",
       flex:"wrap",
       gap: ".5em",
    },
    tagItem: {
    background: "yellow",
    display: "inline-block",
    padding: ".5em .75em",
    border: "20px"
},
close: {
    height: "20px",
    width: "20px",
    background: "red",
    color: "black",
    display: "inline-flex",
    justify: "center",
    align: "center",
    marginLeft:".5em",
    fontSize: "18px",

},
inputS: {

  flex: 1,
  padding: ".5em 0",

},

}));


function TagsInput(){
    const classes = useStyles();
    const [tags, setTags] = useState([])

    const handleKeyDown = (e) => {
       if(e.key !== 'Enter') return /* if not equal to enter, just return */
       const value = e.target.value /*otherwise value =  to whatever user enters*/
       if(!value.trim()) return   /*remove empty space*/
       setTags([...tags, value])  /*have previous text and add new value*/
       e.target.value = '' /*clean input afterwards*/
    }

    const removeTag = (index) => {
        setTags(tags.filter((el, i) => i !== index))
    }
    return (

        <div className={classes.wrapperito}>
            {tags.map((tag, index)=> (
                <div className={classes.tagItem} key={index}>
                    <span className="text">{tag}</span>
                    <span className={classes.close} onClick={() => removeTag(index)}>&times;</span>
                </div>
            ))}
          
            <input onKeyDown={handleKeyDown} className={classes.inputS} type="text" placeholder="type something "></input>
        </div>
    )
}

export default TagsInput;