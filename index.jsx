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
        <h1>Главная страница</h1>
        <p style={textStyle}>Добро пожаловать на сайт "Психософия - помощь в самотипировании". Данный проект поможет вам разобраться в теории типологии, после чего вы сможете сделать вывод о своем психософском типе.</p>
        <h1 style={textStyle}>Карта сайта</h1>
        <ul>
            <li style={textStyle}>“Главная” - собственно, эта страница;</li>
            <li>“Теория” - раздел об истории типологии, ее структуре. Также там находятся поверхностные описания аспектов и свойства функций.</li>
            <li>"Аспекты" - для тех, кому мало поверхностной информации и кто хочет реально углубиться в психософию - там находятся подробные описания каждого аспекта.</li>
            <li>"Контакты" - для тех, кто хочет обратиться за помощью лично ко мне или сообщить об ошибке.</li>
        </ul>
        <h1 style={textStyle}>Заключение</h1>
        <p style={textStyle}>В заключение хочу поблагодарить за уделенное время данному сайту, если Вы это читаете. Я надеюсь, что вы сможете получить ответы на свои вопросы благодаря моему творению.</p>
         
    </div>    
);