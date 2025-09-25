import { LoginForm } from "../components/LoginForm";

interface LoginPageProps {
  onLogin?: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            لوحة التحكم
          </h1>
          <p className="text-muted-foreground">
            قم بتسجيل الدخول للوصول إلى النظام
          </p>
        </div>
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  );
}
