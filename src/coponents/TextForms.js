import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function TextForms(props) {


  const [text, setText] = useState('');
  // setText("Other Statements");

  const clicklower = () => {
    console.log("Clicked on LowerCase =>" + text)
    let cases = text.toLowerCase();
    setText(cases);
    props.alert("Alphabets are in Lower Case", "success")
  }
  const clickupper = () => {
    console.log("Clicked on LowerCase" + text)
    let cases = text.toUpperCase();
    setText(cases);
    props.alert("Alphabets are in Upper Case", "success");

  }
  const CapitalClick = () => {
    let capi = text.charAt(0).toUpperCase() + text.slice(1);
    setText(capi);
    props.alert("First Letter is in Capital Case", "success");
  }
  const ClearClick = () => {
    let clearT = text.slice(text.length);
    setText(clearT);
    props.alert("Alphabets are Cleared", "success");

  }
  const CopyClick = () => {
    var text = document.getElementById("myBox");
    console.log('running');
    text.select();
    navigator.clipboard.writeText(text.value);
    //is used for remove selected characters or select 
    document.getSelection().removeAllRanges();
    props.alert("Alphabets are Copied", "success");

  }
  const removeExtraSpaces = () => {
    let remove = text.split(/[ ]+/);
    setText(remove.join(" "));
    props.alert("Extra Spaces are removed", "success");

  }


  const changeon = (event) => {
    console.log('changed');
    setText(event.target.value);

  }


  return (
    <>
      <div className="container mx-auto ">
        <div className="container text-center " data-aos = 'fade-out'>
          <h1 className='text-4xl font-bold  ' >Enter to Analyze Text</h1>
        </div>
        <div className="container mx-auto my-5" data-aos = 'zoom-in' >
          <textarea style={{ border : '1px solid black' }} className='w-full text-slate-900 mx-auto ' rows={5} name="" id="myBox" value={text} onChange={changeon} ></textarea>
        </div>
        <div className="container mx-auto text-center flex flex-col md:flex-row " data-aos = 'slide-right' >
          <button data-aos="zoom-in"  disabled={text.length === 0} onClick={clicklower} class="inline-flex text-white bg-indigo-500 border-0 rounded-lg py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg mx-2  ">Click to LowerCase</button>
          <button data-aos="zoom-in" disabled={text.length === 0} onClick={clickupper} class="inline-flex text-white bg-indigo-500 border-0 rounded-lg py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg mx-2  ">Click to UPPERCASE</button>
          <button data-aos="zoom-in" disabled={text.length === 0} onClick={CapitalClick} class="inline-flex text-white bg-indigo-500 border-0 rounded-lg py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg mx-2  ">Click to Capital the Letter</button>
          <button data-aos="zoom-in" disabled={text.length === 0} onClick={ClearClick} class="inline-flex text-white bg-indigo-500 border-0 rounded-lg py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg mx-2  ">Click to Clear All</button>
          <button data-aos="zoom-in" disabled={text.length === 0} onClick={CopyClick} class="inline-flex text-white bg-indigo-500 border-0 rounded-lg py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg mx-2  ">Click to Copy All</button>
          <button data-aos="zoom-in" disabled={text.length === 0} onClick={removeExtraSpaces} class="inline-flex text-white bg-indigo-500 border-0 rounded-lg py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg mx-2  ">Click to Remove Extra Spaces</button>
        </div>
        <div className="my-5" data-aos='flip-up' >
          <p>{text.length} <strong>chars</strong> and {text.split(/\s/).filter((element) => { return element.length != 0 }).length} <strong>words</strong></p>
          <p className='text-3xl my-1 '> {0.008 * text.split(" ").filter((element) => { return element.length != 0 }).length} Read in this time </p>

          <h2 className='text-2xl font-semibold mt-2 ' >Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
        </div>
      </div>
    </>
  )
}
