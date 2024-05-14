import ollama from "ollama";
import React, {useState, useEffect} from "react";

export const OllamaResponseOutput = () => {
    const [output, setOutput] = useState("");
    useEffect(() => {
        const fetchLlmResponse = async () => {
            try {
                const response = await ollama.chat({
                    model: "llama3",
                    messages: [{role: "user", content: "Why is the sky blue?"}],
                });
                console.log(response.message.content);
                setOutput(response.message.content);
            } catch (error) {
                console.error("Error fetching LLM response:", error);
            }
        };
        fetchLlmResponse();
    }, []);

    return <p>{output}</p>;
};