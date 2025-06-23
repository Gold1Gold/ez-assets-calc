import { useNavigate } from "react-router-dom";

const GlossaryButton = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/GlossaryPage")}
            >
                Glossary
            </button>
        </div>
    );
};

export default GlossaryButton;
