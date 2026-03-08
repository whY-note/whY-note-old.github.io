function startParticleScene(sourceCanvas){

    const container=document.getElementById("three-container")
    
    const scene=new THREE.Scene()
    
    const camera=new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
    )
    
    camera.position.z=300
    
    const renderer=new THREE.WebGLRenderer({alpha:true})
    
    renderer.setSize(window.innerWidth,window.innerHeight)
    
    container.appendChild(renderer.domElement)
    
    const imageData=sourceCanvas
    .getContext("2d")
    .getImageData(0,0,sourceCanvas.width,sourceCanvas.height)
    
    const particles=[]
    
    const geometry=new THREE.BufferGeometry()
    
    const positions=[]
    const colors=[]
    
    const step=6
    
    for(let y=0;y<sourceCanvas.height;y+=step){
    
    for(let x=0;x<sourceCanvas.width;x+=step){
    
    const index=(y*sourceCanvas.width+x)*4
    
    const r=imageData.data[index]/255
    const g=imageData.data[index+1]/255
    const b=imageData.data[index+2]/255
    
    positions.push(
    
    x-sourceCanvas.width/2,
    -y+sourceCanvas.height/2,
    0
    
    )
    
    colors.push(r,g,b)
    
    }
    
    }
    
    geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions,3)
    )
    
    geometry.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(colors,3)
    )
    
    const material=new THREE.PointsMaterial({
    
    size:2,
    vertexColors:true
    
    })
    
    const points=new THREE.Points(geometry,material)
    
    scene.add(points)
    
    let explode=false
    let t=0
    
    function animate(){
    
    requestAnimationFrame(animate)
    
    t+=0.01
    
    const pos=geometry.attributes.position.array
    
    for(let i=0;i<pos.length;i+=3){
    
    if(explode){
    
    pos[i]+=Math.sin(i)*2
    pos[i+1]+=Math.cos(i)*2
    
    }else{
    
    pos[i]*=0.98
    pos[i+1]*=0.98
    
    }
    
    }
    
    geometry.attributes.position.needsUpdate=true
    
    renderer.render(scene,camera)
    
    }
    
    animate()
    
    setTimeout(()=>{
    
    explode=true
    
    },1000)
    
    setTimeout(()=>{
    
    mergeToLogo(points)
    
    },3000)
    
    }

function mergeToLogo(points){

    const pos=points.geometry.attributes.position.array
    
    for(let i=0;i<pos.length;i+=3){
    
    pos[i]=Math.random()*50
    pos[i+1]=Math.random()*50
    
    }
    
    points.geometry.attributes.position.needsUpdate=true
    
    setTimeout(()=>{
    
    window.location.href="/home/"
    
    },1500)
    
    }