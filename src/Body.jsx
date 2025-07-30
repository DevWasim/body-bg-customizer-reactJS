function Body() {
    
    

    let changeStyle = (e) => {
        const input = e.view.prompt("Enter Your Favorite Color :  ⬇");
        if (input) document.body.style.backgroundColor = input
        return;
    };

    return (
        <div onClick={(e) => changeStyle(e)} style={{backgroundColor: {changeStyle}}}>
        </div>
    );
}
    


export default Body;





















