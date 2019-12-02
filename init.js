import app from './app' //app.js을 다읽음

const PORT = 4000;

const hendelListening= () =>{
    console.log(`✅ listning : http://localhost:${PORT}`);
}

app.listen(PORT, hendelListening);
