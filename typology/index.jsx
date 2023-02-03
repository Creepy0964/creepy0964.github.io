const colors = {
    etonBlue: '#86cb92',
    shinyShamrock: '#71b48d',
    purpleNavy: '#404e7c',
    spaceCadet: '#251f47',
    darkPurple: '#260f26'
};

const styleObj = {
    color: colors.spaceCadet,
    fontFamily: 'Segoe UI Semibold',
    backgroundColor: colors.purpleNavy,
    marginTop: '-20px',
    marginBottom: '-20px',
    marginLeft: '-5px',
    width: '100.7%'
};

const mainStyle = {
    color: colors.shinyShamrock,
    fontFamily: 'Segoe UI Semibold',
}

const textStyle = {
    marginTop: '-20px',
}

const final = {
    position: 'absolute',
    bottom: '0%'
}

const headerButtons = {
    border: 'none',
    borderRadius: '7px',
    fontFamily: 'Segoe UI Semibold',
    fontSize: '15px',
    height: '35px',
    width: '150%',
    backgroundColor: colors.shinyShamrock,
};

const test = {
    float: 'left',
    position: 'absolute',
    right: '26.2%',
    top: '5px',
}

const test1 = {
    float: 'left',
    position: 'absolute',
    right: '323px',
    top: '5px',
}

const test2 = {
    float: 'left',
    position: 'absolute',
    right: '162px',
    top: '5px',
}

const test3 = {
    float: 'left',
    position: 'absolute',
    right: '41px',
    top: '5px',
}

function index() {
    document.location = '/';
}

function art() {
    document.location = '/art/index.html';
}

function typology() {
    document.location = '/typology/index.html';
}

function media() {
    document.location = '/media/index.html';
}

ReactDOM
.createRoot(document.getElementById("app"))
.render(
    <div style={styleObj}>
        <h1>Creepy0964</h1> 
        <div style={test}>
            <button style={headerButtons} onClick={index}>Главная</button> 
        </div> 
        <div style={test1}>
            <button style={headerButtons} onClick={art}>Творческий уголок</button>   
        </div> 
        <div style={test2}>
            <button style={headerButtons} onClick={typology}>Типологии</button>   
        </div> 
        <div style={test3}>
            <button style={headerButtons} onClick={media}>Соц. сети</button>   
        </div> 
    </div>    
);

ReactDOM
.createRoot(document.getElementById("main"))
.render(
    <div style={mainStyle}>
        <h1>Типологии</h1>
        <p style={textStyle}>еще делаю😇</p>
        <p style={final}>(C) Крипи aka давитель либералов aka Creepy0964, 2023 г. Я не знаю, зачем я это поставил, но пусть будет. Версия сайта: 0.1.0</p>
    </div>    
);