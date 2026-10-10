const webcam=new Webcam(document.getElementById('wc'));
let running=true,model;
async function init(){
 try {
  await webcam.setup();model=await tf.loadLayersModel('./sign_language_model.json');
  while(running){
   const prediction=tf.tidy(()=>{
    const scores=model.predict(tf.sum(tf.mul(webcam.capture(),tf.tensor1d([.299,.587,.114])),3,true)).as1D();
    // Sign MNIST has no static J/Z samples; those two logits are unsupported.
    return scores.add(tf.tensor1d(Array.from({length:26},(_,i)=>i===9||i===25?-1e9:0))).argMax();
   });
   try{const [index]=await prediction.data();document.getElementById('prediction').textContent=String.fromCharCode(65+index);}finally{prediction.dispose();}
   await tf.nextFrame();
  }
 }catch(error){document.getElementById('prediction').textContent=`Camera/model unavailable: ${error.message}`;}
 finally{webcam.stop();model?.dispose();}
}
window.addEventListener('pagehide',()=>{running=false;webcam.stop();});
init();
