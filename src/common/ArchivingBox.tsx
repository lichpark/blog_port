type ArchivingBoxProp = {
  titleImg?: string;
  linkUrl?: string;
  linkText?: string;
  descTitle?: string;
  desc?: string[];
};
const ArchivingBox = (props: ArchivingBoxProp) => {
  const {
    titleImg = "",
    linkUrl = "",
    linkText = "",
    descTitle = "",
    desc = [],
  } = props;

  return (
    <div className="bg-white rounded-2xl p-5">
      <article className="w-6/12 py-5">
        <img src={titleImg} className="w-full" alt="img_logo" title="logo" />
      </article>
      <div>
        <a
          href={linkUrl}
          className="text-sky-500 text-base"
          target="_blank"
          rel="noreferrer"
        >
          {linkText}
        </a>
      </div>
      <div className="font-bold py-3">{descTitle}</div>
      <ul className="px-5">
        {desc.map((v) => (
          <li className="py-1 text-sm list-disc font-bold">{v}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArchivingBox;
