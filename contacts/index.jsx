const colors = {
    etonBlue: '#86cb92',
    shinyShamrock: '#FAF3DD',
    purpleNavy: '#8FC0A9',
    spaceCadet: '#FAF3DD',
    darkPurple: '#696D7D'
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
    right: '350px',
    top: '5px',
}

const test1 = {
    float: 'left',
    position: 'absolute',
    right: '254px',
    top: '5px',
}

const test2 = {
    float: 'left',
    position: 'absolute',
    right: '153px',
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

function theory() {
    document.location = '/theory/index.html';
}

function aspects() {
    document.location = '/aspects/index.html';
}

function contacts() {
    document.location = '/contacts/index.html';
}

ReactDOM
.createRoot(document.getElementById("app"))
.render(
    <div style={styleObj}>
        <h1>Психософия - помощь в самотипировании</h1> 
        <div style={test}>
            <button style={headerButtons} onClick={index}>Главная</button> 
        </div> 
        <div style={test1}>
            <button style={headerButtons} onClick={theory}>Теория</button>   
        </div> 
        <div style={test2}>
            <button style={headerButtons} onClick={aspects}>Аспекты</button>   
        </div> 
        <div style={test3}>
            <button style={headerButtons} onClick={contacts}>Контакты</button>   
        </div> 
    </div>    
);

ReactDOM
.createRoot(document.getElementById("main"))
.render(
    <div style={mainStyle}>
        <h1>Контакты</h1>
        <p style={textStyle}>https://t.me/creepy0964 - сюда можно обратиться, если Вы нашли какой-то недочёт на сайте или хотите что-то добавить.</p>
         
    </div>    
);