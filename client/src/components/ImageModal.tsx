import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 border-0 bg-transparent shadow-none"
        data-testid="modal-fullscreen-image"
        aria-describedby="fullscreen-image-description"
      >
        <VisuallyHidden>
          <DialogTitle>Fullscreen Image: {imageAlt}</DialogTitle>
          <div id="fullscreen-image-description">
            View {imageAlt} in fullscreen. Press Escape or click the X button to close.
          </div>
        </VisuallyHidden>
        <div className="relative w-full h-full flex items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-black/70 text-white rounded-full p-3 hover:bg-black/90 transition-all hover-elevate"
            data-testid="button-close-modal"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-full max-h-[95vh] w-auto h-auto object-contain rounded-lg"
            data-testid="img-fullscreen"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
