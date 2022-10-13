import './style.css';
import { Toaster, toast } from 'react-hot-toast';

export const ContactPage = () => {
  const getMessageData = (event) => {
    let isValid = false;
    event.target['name'].value && event.target['email'].value && event.target['message'].value
      ? isValid = true : isValid = false;
    return isValid;
  };

  const sendMessage = (event) => {
    event.preventDefault();
    const isValid = getMessageData(event);
    if (!isValid) {
      toast.error(`The data entered to send the message are not correct.`, { duration: 3000, });
      return;
    }
    toast.success(`Message sent successfully`, { duration: 3000 });
    document.getElementById('message-form').reset();
  }

  return (
    <div className='form-container'>
      <form id="message-form" onSubmit={sendMessage}>
        <fieldset>
          <label for="name">Nombre:</label>
          <input id="name" type="text" name="name" />
          <label for="email">Correo:</label>
          <input id="email" type="text" name="email" />
          <label for="message">Mensaje:</label>
          <textarea id="message" name="message" maxLength={185} />
          <button id="purchase-btn" className='purchase-end-btn purchase-btn' type="submit" >Enviar</button>
        </fieldset>
      </form>
      <Toaster position='bottom-center' toastOptions={{ className: 'toaster' }} />
    </div>
  )
}
