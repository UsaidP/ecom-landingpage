import {
  About,
  GroupCompanies,
  Help,
  MailUs,
  Registered_Off_Add,
  ConsumerPolicy,
} from "./../index";

function Footer() {
  return (
    <div
      style={{ background: "#212121" }}
      className='m-2 text-xs flex px-16 justify-between p-2 text-white '
    >
      <About />
      <GroupCompanies />
      <Help />
      <ConsumerPolicy />
      <div className='flex '>
        <MailUs />
      </div>
      <div>
        <Registered_Off_Add />
      </div>
    </div>
  );
}

export default Footer;
