import style from  "./file1.module.css"
import "./index.css"


export function CSSHello()
{
    return <h3 className={style.stylingRequired}> Welcome to external styling  </h3>
}

//adding loader component on the browser

export function CSSLoaderComponent()
{
     return <div className={style.ldxStylingRoller}>
    {/* <div>loading </div> Can use words or any logos if we want to spin them   */}
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>


   /*  return <h3 className={style.stylingRequired}> Welcome to hello web dev external styling </h3> */
} 