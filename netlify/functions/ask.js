exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { prompt } = JSON.parse(event.body);

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1000,
      system: `Je bent een wiskundeleraar die uitlegt uit een basiscursus kansrekenen.
Antwoord in het Nederlands, helder en beknopt.
Gebruik eenvoudige HTML-opmaak: <p> voor alinea's, <strong> voor nadruk, <code> voor formules.
Houd het bij maximaal 300 woorden. Geef altijd een concreet voorbeeld.`,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  const data = await response.json();
  const text = data.content?.map(b => b.text || '').join('') || '';

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  };
};
