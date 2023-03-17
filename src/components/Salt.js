export default function Salt({ title }) {
  const format_title = (phrase) => {
    const phrase_array = phrase.split(" ");
    const half_length = phrase_array.length / 2;
    let additional_length = phrase_array.length % 2 === 0 ? 0 : 1;
    return `<span class="first-line">${phrase_array
      .slice(0, half_length + additional_length)
      .join(" ")}</span><br/><span class="second-line">${phrase_array
      .slice(half_length + additional_length)
      .join(" ")}</span>`;
  };
  return (
    <div className="salt">
      <p dangerouslySetInnerHTML={{ __html: format_title(title) }} />
    </div>
  );
}
