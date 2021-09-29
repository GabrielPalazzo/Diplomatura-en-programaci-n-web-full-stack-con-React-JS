import React from 'react';
const ContactoPage = (props)=>{
    return (<main class="content">
    <div class="columna left">
        <h2>contacto rapido</h2>
        <form action="" class="formulario">
            <p>
                <label for="nombre">Nombre</label>
                <input type="text" name=""/>
            </p>
            <p>
                <label for="email">Email</label>
                <input type="text" name=""/>
            </p>
            <p>
                <label for="telefono">Telefono</label>
                <input type="text" name=""/>
            </p>
            <p>
                <label for="mensaje">Mensaje</label>
                <textarea name="" id="" cols="10" rows="5"></textarea>
            </p>
            <p class="acciones">
                <input type="submit" value="Enviar"/>
            </p>
        </form>
    </div>
    <div class="columna right">
        <h2>otras comunicaciones</h2>
        <p>tambien puede contactarse con nosotros usando los siguientes medios</p>
    <ul>
        <li>Telefonos: 43435566</li>
        <li>Email: contacto@sueñosenpastel.com.ar</li>
        <li>Facebook:</li>
        <li>Twitter:</li>
        <li>Skype:</li>
                </ul>
    </div>
</main>);
}
export default ContactoPage;