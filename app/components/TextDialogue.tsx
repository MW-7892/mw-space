import { useEffect } from "react"

export default function TextDialogue({
  isOpen = false,
  onClose,
  children
}: {
  isOpen?: boolean
  onClose: () => void
  children: JSX.Element | string
}) {

  useEffect(() => {
    if (isOpen) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");
  }, [isOpen])

  return isOpen ? (
    <div
      onClick={onClose}
      className="w-[100vw] h-[100vh] bg-black/50 content-center
        bg-blend-overlay fixed top-0 left-0 transition duration-300"
    >
      <div className="h-fit flex justify-center">
        <div className={`relative card flex h-fit w-fit rounded-md p-4`}>
          { children }
          <button
            className="uppercase text-blue-500 absolute bottom-0 right-0 mb-3 mr-4"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null
}
