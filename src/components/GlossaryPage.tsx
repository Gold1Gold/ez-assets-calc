import glossaryHtml from "../to-add-for-glossary/glossary-html";

const GlossaryPage = () => (
    <div>
        <h1>Glossary</h1>
        <ul>
            {glossaryHtml.map((item) => (
                <li key={item.key}>
                    <h2>{item.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: item.text }} />
                </li>
            ))}
        </ul>
    </div>
);

export default GlossaryPage;
