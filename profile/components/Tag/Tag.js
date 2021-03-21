const Tag = ({ title, key }) => {
  return (
    <div
      key={key}
      style={{
        display: `inline-block`,
        borderRadius: `4px`,
        backgroundColor: `#060606`,
        color: `#fff`,
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
