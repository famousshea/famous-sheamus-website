// components/mdx/YouTube.tsx
export default function YouTube({ id }: { id: string }) {
    return (
        <div className="my-8 aspect-video w-full overflow-hidden rounded-xl border-2 border-zinc-900 shadow-[8px_8px_0px_0px_rgba(0,128,128,0.2)] bg-zinc-100">
            <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
                title="YouTube video player"
                // These permissions are critical to prevent browser blocks
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
}