// app/api/download-resume/route.ts

const RESUME_URL = 'https://pie474.github.io/resume/main.pdf';

const DESIRED_FILENAME = 'Chinmay Murthy Resume.pdf';

export async function GET() {
    try {
        const response = await fetch(RESUME_URL);

        if (!response.ok) {
            return new Response(`Failed to fetch resume: ${response.statusText}`, { status: response.status });
        }

        // Extract the content type and body from the fetched response
        const contentType = response.headers.get('content-type') || 'application/pdf';
        const pdfBlob = await response.blob();


        // Set the Content-Disposition header to force download and suggest the filename
        const headers = new Headers();
        headers.set('Content-Disposition', `attachment; filename="${DESIRED_FILENAME}"`);
        headers.set('Content-Type', contentType);

        return new Response(pdfBlob, {
            status: 200,
            headers: headers,
        });

    } catch (error) {
        console.error('Resume download error:', error);
        return new Response('Internal Server Error while processing resume download.', { status: 500 });
    }
}