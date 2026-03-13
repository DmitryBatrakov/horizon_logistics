export default function Loading() {
    return (
        <div className="w-full min-h-screen bg-button flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-button-foreground" />
        </div>
    );
}