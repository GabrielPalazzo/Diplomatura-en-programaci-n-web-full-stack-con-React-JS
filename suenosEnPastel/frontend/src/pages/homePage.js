import React from 'react';
const HomePage = (props) => {
    return (
        <main class="content">
        <div class="homeimg">
            <img src="images/pastisseria-boci-barcelona.jpg" class="card-img-top" alt="..."/>
        </div>
        <div class="content">
            <div class="columnas">
                <div class="bienvenidos left">
                    <h2>Bienvenidos</h2>
                   <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis aut neque
                    quibusdam, et atque maiores id fugiat reprehenderit alias quae eaque nobis nisi nihil odit similique
                    fuga eum, ducimus inventore?.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis aut neque
                    quibusdam, et atque maiores id fugiat reprehenderit alias quae eaque nobis nisi nihil odit similique
                    fuga eum, ducimus inventore?.
                
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis aut neque
                    quibusdam, et atque maiores id fugiat reprehenderit alias quae eaque nobis nisi nihil odit similique
                    fuga eum, ducimus inventore?.</p>
                </div>
                <div class="testimonios right">
                <h2>Testimonios</h2>
                <div class="testimonio">
                <p class="cita"> Excelentes tortas</p>
                <p class="autor">Juan Perez - juan@perez.com.ar </p>
            </div>
        </div>
    </div>
        </div>
    </main>
    );
}
export default HomePage;