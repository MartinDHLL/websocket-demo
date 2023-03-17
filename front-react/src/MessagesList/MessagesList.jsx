import Input from "./Input/Input";
import Message from "./Message/Message";

export default function MessagesList() {
  return (
    <div className="flex flex-col justify-between p-8">
      <div className="flex flex-col items-start gap-y-10 overflow-scroll-y">
        <Message
          author="martin"
          content="Test des messages"
          date="hier à 16 h 55"
        />
        <Message
          author="testeur"
          content="Je confirme que le test est testé. Programmons un autre test"
          date="aujourd'hui"
        />
      </div>
      <Input />
    </div>
  );
}
