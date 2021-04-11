// theme black
// color: white
// backgroundColor: black
// border: none

// theme white
// color: black
// backgroundColor: white
// border: 0.75px solid black

const Tag = ({ title = '', key, theme = 'black' }) => {
  return (
    <div
      key={key}
      style={{
        display: `inline-block`,
        borderRadius: `4px`,
        backgroundColor: `${theme === 'black' ? '#060606' : 'transparent'}`,
        color: `${theme === 'black' ? 'white' : '#060606'}`,
        border: `${theme === 'black' ? 'none' : '2px solid #060606'}`,
        padding: `2px 5px`,
        margin: `0px 8px 8px 0px`,
        fontSize: `0.875em`,
        fontWeight: `700`,
        cursor: ` pointer`,
      }}
    >
      {title.toLowerCase()}
    </div>
  );
};

export default Tag;
