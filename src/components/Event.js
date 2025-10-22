const Event = () => {
    const handleMyEvent = (e) =>{
        console.log(e);
        console.log("ativou o evento")
    };
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>clique aqui</button>
            </div>

            <div>
                <button onClick={()=> console.log("Clicou")}>clique aqui também</button>
            </div>
        </div>
    )
};

export default Event;