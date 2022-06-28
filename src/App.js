import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import contacts from './data/contacts.json';
// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <main className='main'>
          {contacts.map((contact, index) => (
            <Contact data={contact} key={contact.phone} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;
