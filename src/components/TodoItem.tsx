export const TodoItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <li className='my-4 mx-0 p-4 bg-[#f7f5ef]'>{text}</li>
    </>
  );
};
