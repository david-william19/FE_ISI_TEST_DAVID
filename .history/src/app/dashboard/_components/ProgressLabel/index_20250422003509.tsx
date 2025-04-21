type Progress = 'ON_PROGRESS' | 'NOT_STARTED' | 'REJECT' | 'DONE'

interface ProgressLabelProps {
    progress: Progress
}

export function ProgressLabel({progress}: ProgressLabelProps) {

    if(progress == '')
    return (
        <div className="">

        </div>
    )
} 