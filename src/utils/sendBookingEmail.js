import emailjs from "@emailjs/browser";

const sendBookingEmail = async ({
    user_name,
    sport,
    court,
    date,
    time,
    to_email,
}) => {
  const templateParams = {
    user_name,
    sport,
    court,
    date,
    time,
    to_email,
  };
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );
    console.log("SUCCESS!", response.status, response.text);
  } catch (error) {
    console.log("FAILED...", error);
  }
};

export default sendBookingEmail;