import clsx from "clsx"

type Progress = 'ON_PROGRESS' | 'NOT_STARTED' | 'REJECT' | 'DONE'

interface ProgressLabelProps {
    progress: Progress
}

export function ProgressLabel({progress}: ProgressLabelProps) {

    const baseClass = "rounded-lg p-2.5 text-white"
    
    if(progress == 'DONE') {
        return (
            <span className={clsx(baseClass, 'bg-green-500')}>
                Done
            </span>
        )
    }

    if(progress == 'NOT_STARTED') {
        return (
            return (
                <span className={clsx(baseClass, 'bg-green-500')}>
                    Done
                </span>
            )
        )
    }
} 