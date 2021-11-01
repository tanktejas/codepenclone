const htmledit=CodeMirror(document.querySelector(".edi .code .htmlcode"),{
    lineNumbers:true,
    tabSize:4,
    mode:"xml"
});
 
const cssedit=CodeMirror(document.querySelector(".edi .code .csscode"),{
    lineNumbers:true,
    tabSize:4,
    mode:"css"
});
const jsedit=CodeMirror(document.querySelector(".edi .code .jscode"),{
    lineNumbers:true,
    tabSize:4,
    mode:"javascript"
}); 

const fun=()=>{
    const htmlc = htmledit.getValue();
    const cssc = "<style>" + cssedit.getValue() + "</style>";
    const jsc = "<script>" + jsedit.getValue() + "</script>";

    let preview = document.querySelector("#preview-wind").contentWindow.document;
    preview.open();     
    preview.write(htmlc + cssc + jsc);
    preview.close();
    
}                       